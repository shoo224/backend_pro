import {v2} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_KEY,
        api_secret: process.env.CLOUDINARY_CLOUD_SECRET
    });

    const uploadcloud = async (localfilepath) =>{
        try {
            if (!localfilepath) return null
            const response = await cloudinary.uploader.upload(localfilepath,{
                resource_type:"auto"
            })
            console.log("file is uploaded on cloud",response.url);
            return response
        } catch (error) {
            fs.unlinkSync(localfilepath)
            return null
        }
    }
    
export {uploadcloud}