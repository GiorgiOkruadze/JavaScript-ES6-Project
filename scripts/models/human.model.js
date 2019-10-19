class Human {
    static _id = 0;
    
    constructor(name,imageUrl,genderCode,mail,bio,fbAccountLink) {
        this.ID = Human._id;
        this.Name = name;
        this.ImageUrl = imageUrl;
        this.Gender = new Gender(genderCode);
        this.Mail = mail;
        this.Bio = bio;
        this.FbAccountLink = fbAccountLink;

        Human._id++;
    }
}