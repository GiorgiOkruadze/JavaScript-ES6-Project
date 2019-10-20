class MailService {
    constructor(){
        this.MailSender = "okruadze_g@itstep.org";
        this.UserName = "okruadze_g@itstep.org";
        this.Password = "5dc6a5eb-6c69-46fc-a6ae-543e853eeeb6"
    }


    sentMailService(to,subject,text) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : this.UserName,
            Password : this.Password,
            To : to,
            From : this.MailSender,
            Subject : subject,
            Body : text
        }).then(
          message => console.log(message)
        );
    }
}