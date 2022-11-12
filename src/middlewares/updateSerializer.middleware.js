
const updateSerializerMiddleware =
  (serializer) => async (request, response, next) => {
    
    try {
      const validatedBody = await serializer.validate(request.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      request.editValidatedBody = validatedBody;

      return next();
    } catch (error) {
      return response.status(400).json({
        message: error.errors,
      });
    }
  };

export default updateSerializerMiddleware;
