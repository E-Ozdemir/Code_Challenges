class Triangle{
    constructor(ilkKenar,ikinciKenar,ücüncüKenar){
        this.ilkKenar = ilkKenar;
        this.ikinciKenar = ikinciKenar;
        this.ücüncüKenar = ücüncüKenar;
    }

    triangleType(){
        if (((this.ilkKenar>0)&&(this.ikinciKenar>0)&&(this.ücüncüKenar>0))&&((this.ilkKenar+this.ikinciKenar>=this.ücüncüKenar)&&(this.ilkKenar+this.ücüncüKenar>=this.ikinciKenar)&&(this.ücüncüKenar+this.ikinciKenar>=this.ilkKenar))) {
            console.log('sart saglandi');
            // return 'sart saglandi';
            if (this.ilkKenar==this.ikinciKenar && this.ikinciKenar==this.ücüncüKenar) {
                console.log(' equilateral');
            }
            else if(this.ilkKenar==this.ikinciKenar || this.ikinciKenar==this.ücüncüKenar || this.ilkKenar==this.ücüncüKenar){
                console.log('isosceles');
            }
            else{
                console.log('Scalena')
            }
        }
        else{
            console.log('Girmeye calistiginiz degerler ücgen icin gecerli degildir');
        }
    }
}

let myTriangle = new Triangle(2,2,2);
// console.log(document.querySelector("#triangle").innerHTML)
// document.querySelector("#triangle").innerHTML=
myTriangle.triangleType();