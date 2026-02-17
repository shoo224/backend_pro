const asyncHandler = (requestHandler) => {
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err))
    }
}

export {asyncHandler}

<<<<<<< HEAD
//wrapped up data request handling function.
=======
//wrapped up data request handling function.
>>>>>>> 307724aa26f9a3dd8dbfcddfb9b3ca468652c4c6
