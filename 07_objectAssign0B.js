var bankDetails = {
  sbiBank: {
    Location: "Mumbai",
    accountNo: 265632355664335,
    ifsc: "indexedDB6565",
    intrestRate: 5,
    showDetails: function () {
      return (
        this.bankName +
        this.location +
        this.accountNo +
        this.ifsc +
        this.intrestRate
      );
    },
  },

  axisBank: {
    Location: "Mumbai",
    accountNo: 265632355664335,
    ifsc: "indexedDB6565",
    intrestRate: 5,
    showDetails: function () {
      this.bankName +
        this.location +
        this.accountNo +
        this.ifsc +
        this.intrestRate;
    },
  },

  hdfcBank: {
    Location: "Mumbai",
    accountNo: 265632355664335,
    ifsc: "indexedDB6565",
    intrestRate: 5,
    showDetails: function () {
      this.bankName +
        this.location +
        this.accountNo +
        this.ifsc +
        this.intrestRate;
    },
  },

  yesBank: {
    Location: "Mumbai",
    accountNo: 265632355664335,
    ifsc: "indexedDB6565",
    intrestRate: 5,
    showDetails: function () {
        return this.location + this.accountNo +this.ifsc +this.intrestRate;
       
    }

  },
};

console.log(`Bank Names are:`);
console.log(bankDetails);

console.log(`1.------------YES BAnk Details------------`);
var yesB= bankDetails.yesBank;
console.log(yesB);

console.log(`2.------------hdfcBank BAnk Details------------`);
var hdfcB= bankDetails.hdfcBank;
console.log(hdfcB);

console.log(`3.------------axisBank BAnk Details------------`);
var axisB= bankDetails.axisBank;
console.log(axisB);

console.log(`4.------------sbiBank BAnk Details------------`);
var sbiB= bankDetails.sbiBank;
console.log(sbiB);