import jwt from 'jsonwebtoken';

export const checkAuthToken = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    if (token) {
        try {
            const decoded = jwt.verify( token, process.env.JWT_SECRET)
            req.userId = decoded.id
            next()
        }
        catch (err) {
            res.json(
                {
                    "message":'Ошибка проверки authToken',
                }
            )
        }
    }

}