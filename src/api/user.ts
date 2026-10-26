// utils
import axios, { endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function quickUpdateUser(userId: string, userData: any) {
    /**
     * Work on server
     */
    const data = userData;
    const URL = endpoints.profilUpdate;
    await axios.put(`${URL}/${userId}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

// nav permission
export async function categories() {
    const categoriesURL = endpoints.categories;
    const res = await axios.post(categoriesURL);
    return res;
}

// get uesr payment transactsions

export async function getTransactions() {
    const getTransactoin = endpoints.user.getTransaction;
    const res = await axios.post(getTransactoin);
    return res;
}

export async function mailsend(data: any) {
    const res = await axios.post(endpoints.user.mailsend, data);
    return res;
}
