/**
 * Created by xiayali on 16/8/12.
 */
module.exports={
  checkUser: function (req,res) {
    if(!req.session.me){
      console.log('you are not login')
      return res.view('login');

    }else{
      console.log('log in')
      return res.view('dashboard');
    }
  },
  getUser:function (req,res) {
    console.log('running getuser');
    User.findOne({id:req.session.me},function (err,user) {
      if(err){
        res.negotiate(err);
      }
      return res.send(user);
    })
  }
};
