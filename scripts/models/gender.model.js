class Gender {
    GenderName;
    GenderCode;

    constructor(genderCode) {
        this.GenderCode = genderCode;
        this.GenderName = this.getGenderNameFronCode(genderCode);
    }

    getGenderNameFronCode(code){
        return code == 0 ? "Female" : "Male";
    }
}