export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'banna', 'Orangae', 'Lemon'],
            filtertext: ''
        }
    },
    computed: {
        filteredfruits() {
            return this.fruits.filter( (element) => {
                return element.match(this.filtertext);
            })
        }
    }
}