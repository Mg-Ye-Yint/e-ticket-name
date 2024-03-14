import axios from "axios";

const getEvent = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_EVENT}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
const getEventDetails = async (id: string) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_EVENT_DETAIL}${id}/detail`
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { getEvent, getEventDetails };