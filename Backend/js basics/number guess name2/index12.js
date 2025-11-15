function onClickEvent() {
    let myCount = 1;
    alert("You completed "+ myCount +" exercise");
    // myCount=nestedCall(myCount);
    // alert("You completed"+ myCount +"exercise");
};

































function nestedCall(count) {
    // document.querySelector("body > ul > li:nth-child(1)").remove();
    console.log("reached NestedCall");
    return count+6;
}