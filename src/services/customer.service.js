import Customer from '../models/customer.model';

//add customer details
export const addDetails = async (body) => {
    let updateCustomerDetails = {
        name: body.name,
        phoneNumber: body.phoneNumber,
        addressType: body.addressType,
        fullAddress: body.fullAddress,
        city: body.city,
        landmark: body.landmark,
        state: body.state,
        pinCode: body.pinCode,
        locality: body.locality
    };
    const findCustomer = await Customer.findOne({ userID: body.userID });
    if (findCustomer != null) {
        const addCustomerDetails = await Customer.findOneAndUpdate(
            {
                _id: findCustomer._id
            },
            { $push: { customer: updateCustomerDetails } },
            {
                new: true
            }
        );
        return addCustomerDetails;
    }
    else {
        const createNewCustomer = await Customer.create({ userID: body.userID, customer: [updateCustomerDetails] });
        return createNewCustomer;
    }
};