let mark = prompt ("What is your mark");

switch(true){
    case (mark >= 80 && mark <=100):
        document.write("A+");
        break;
    
    case (mark >= 70 && mark <=79):
        document.write("A");
        break;
    
    case (mark >= 60 && mark <= 69):
        document.write("A-");
        break;

    case (mark >= 50 && mark <= 59):
        document.write("B");
        break;

    case (mark >= 40 && mark <= 49):
        document.write("C");
        break;
    
    case (mark >= 0 && mark <= 39):
        document.write("F");
        break;

    default:
        document.write("error");
}