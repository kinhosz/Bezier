function availableInput() {
    if(!isNaN(this.value())) {
        availables = max(this.value(), 2);
        console.log(availables);
    }
}
