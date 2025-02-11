import axios from "axios";

const uploadToCloudinary = async (file) => {
    if (!file) throw new Error("No file provided");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset")

    try {
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dwbrxtmds/image/upload",
            formData
        );
        return response.data.secure_url; // Повертає URL завантаженого файлу
    } catch (error) {
        throw new Error("Cloudinary upload failed: " + error.message);
    }
};

export default uploadToCloudinary;