function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "React"];
    var member = {
        name: "John",
        age: 20,
        skills: skills,
        calculateNumbers: function (var1, var2) {
            return var1 + var2;
        }
    };
    console.log(member);
    console.log(member.calculateNumbers(10, 20));
}