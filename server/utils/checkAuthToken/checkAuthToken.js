import JWT from 'jsonwebtoken';

export const checkAuthToken = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    if (token) {
        try {
            const decoded = JWT.verify( token, process.env.JWT_SECRET)
            req.userId = decoded.id
            next()
        }
        catch (err) {
            console.log(err)
            return res.status(404).json(
                {
                    "message":'Ошибка проверки authToken',
                }
            )
        }
    }

}