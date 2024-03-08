//检验用户名是否合法
function checkUsername(){
    //5到10位的数字字母组成
    var usernameReg = /^[a-zA-Z0-9]{5,10}$/
    //获得用户输入的信息
    var inputname =  document.getElementById("usernameInput")
    var username = inputname.value
    //获得提示框
    var usernameMsg = document.getElementById("usernameMsg")

    if (!usernameReg.test(username)){
        //在后面提示账号格式不对，由5到10位的数字字母组成
        usernameMsg.innerText="账号格式不对"
        return false
    } 
    else{
        usernameMsg.innerText="账号格式正确"
        return true
    }

}
//检验用户密码格式是否正确
function checkUserPwd(){
    
    //6到12位的数字字母组成
    var userpwdReg = /^[a-zA-Z0-9]{6,12}$/
    //获得用户输入的信息
    var inputpwd =  document.getElementById("userPwdInput")
    var userpwd = inputpwd.value
    //获得提示框
    var userpwdMsg = document.getElementById("userPwdMsg")
    if (!userpwdReg.test(userpwd)){
        //在后面提示密码格式，由6到12位的数字字母组成
        userpwdMsg.innerText="密码格式错误由6到12位的数字字母组成"
        return false
    } 
    else{
    userpwdMsg.innerText="密码格式正确"
        return true
    }

}

//登录检查用户名和密码格式是否正确
function loginCheckForm(){
    var flag1 = checkUsername()
    var flag2 = checkUserPwd()
    
    if(flag1 && flag2){
        return true
    }
    else return false
    }

//检查两次密码是否一致
function checkReUserPwd(){

//首先还是先检查格式
//6到12位的数字字母组成
var userpwdReg = /^[a-zA-Z0-9]{6,12}$/

var twoInputPwd = document.getElementById("reUserPwdInput")
var twopwd = twoInputPwd.value

//获得信息提示框
var userpwdMsg =document.getElementById("reUserPwdMsg")
if(!userpwdReg.test(twopwd)){
    userpwdMsg.innerText="密码格式有误"
    return false
}
else{
    userpwdMsg.innerText="密码格式正确"
}

//两次密码比较
//获得第一次输入的密码
var userpwdInput = document.getElementById("userPwdInput")
var onepwd = userpwdInput.value
if(onepwd == twopwd){
    return true
}
else{
    userpwdMsg.innerText="两次密码不一致"
    return false
}



}
function checkForm(){
var flag1 = checkUsername()
var flag2 = checkUserPwd()
var flag3 = checkReUserPwd()

if(flag1 && flag2 &&flag3){
    return true
}
else return false
}