// This middleware validates the request body against a given schema using Zod.
//  If the validation fails, it returns a 400 status code with the error details.
export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        if (error.issues) {
            return res
            .status(400)
            .json(error.issues.map((err) => err.message));
        }
    }
};