export const useAuth = () => {
    //getting token from local storage
    let user = localStorage.getItem('userLogData')
    user = JSON.parse(user)

    //checking whether token is present or not
    console.log('auth-user',user);
    if (user){
        if (user['id'] !== 'Invalid Crendentials!') {
            return true;
        } else {
            return false
        }
    }
    return false
};