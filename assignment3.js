var kiosk={
    Fruits:"Mango",
    fruit:"Banana",
    get kioskfruits(){
        return "${this.Fruits}";
    },
    set kioskfruits(value){
      var parts=  value.spllit(" ");
      this.Fruits=parts[0];

    }

}
console.log(kiosk);
console.log(kiosk.Fruits)