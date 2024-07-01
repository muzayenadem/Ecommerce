const userLogout = async (req,res)=>{
    try {
        res.clearCookie('user', { path: '/' });
        res.cookie('user','let see if succed', {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
        });
        const userToken = req.cookies.user
        res.status(200).json({ message: 'Logged out successfully' });
        console.log('Logged out successfully')
        console.log({userToken})
        req.cookies.user = 'not cookies'
        const deletedtoken = req.cookies.user
        console.log({deletedtoken})    
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

module.exports = userLogout