class DiscountCalculator extends Calculator {
    #diversamenteGiovani = 0.40;
    #veriGiovani = 0.20;
    full = 100;

    setVeriGiovani(discount) {
        this.#veriGiovani = discount;
    }

    getVeriGiovani() {
        return this.#veriGiovani;
    }

    /**
     * Sconto diversamente giovani
     * @param {*} value 
     * @returns 
     */
    applyMajorPercentDiscount(value) {
        return this.applyCustomDiscount(value, this.#diversamenteGiovani * 100)
    }

    /**
     * Sconto minori
     * @param {*} value 
     * @returns 
     */
    applyMinorPercentDiscount(value) {
        return this.applyCustomDiscount(value, this.#veriGiovani * 100)
    }

    // Metodo per calcolare uno sconto personalizzato
    applyCustomDiscount(value, discountPercentage) {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new Error("Discount percentage must be between 0 and 100");
        }
        return value - (value * (discountPercentage / 100));
    }
}

// Esempi
let discount = new DiscountCalculator();

// discount.full = 200;
// console.log(discount.full);
// discount.setVeriGiovani(0.30);
console.log(discount.getVeriGiovani());

// console.log('Add in discount: ', discount.add(10, 5)); // 15
// console.log('60+ discount: ', discount.applyMajorPercentDiscount(100)); // 60
// console.log('18- discount: ', discount.applyMinorPercentDiscount(100)); // 80
// console.log('Custom 50 discount: ', discount.applyCustomDiscount(100, 50)); // 50