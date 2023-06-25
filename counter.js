const Counter = {
    data() {
        return {
            count : 0
        }
    },
    template : "The counter is: {{count}}",
    created() {
        setInterval(()=> {
            this.count +1;
        }, 1000)
    }
}

export default Counter;

// the <counter> component is defined as an object, having template, data, and created properties.
// the export default Counter instruction makes the component accessible in the other where this module is imported
// to use the JavaScript import statement