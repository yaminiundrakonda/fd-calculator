document.addEventListener("DOMContentLoaded", function () {

    const investmentInput = document.getElementById("investment");
    const interestRateInput = document.getElementById("interest-rate");
    const timePeriodInput = document.getElementById("time-period");

    function updateInvestmentValue() {
        document.getElementById("investment-value").textContent =
            Number(investmentInput.value).toLocaleString("en-IN");
    }

    function updateInterestValue() {
        document.getElementById("interest-rate-value").textContent =
            interestRateInput.value + "%";
    }

    function updateTimePeriodValue() {
        document.getElementById("time-period-value").textContent =
            timePeriodInput.value + " Years";
    }

    investmentInput.addEventListener("input", () => {
        updateInvestmentValue();
        calculator();
    });

    interestRateInput.addEventListener("input", () => {
        updateInterestValue();
        calculator();
    });

    timePeriodInput.addEventListener("input", () => {
        updateTimePeriodValue();
        calculator();
    });

    updateInvestmentValue();
    updateInterestValue();
    updateTimePeriodValue();

    calculator(); // Initial calculation
});

function calculator() {

    const p = parseFloat(document.getElementById("investment").value);
    const r = parseFloat(document.getElementById("interest-rate").value);
    const t = parseFloat(document.getElementById("time-period").value);

    const n = 4; // Quarterly compounding

    const total = p * Math.pow((1 + (r / 100) / n), n * t);
    const returns = total - p;

    document.getElementById("invested-amount").textContent =
        "₹" + Math.round(p).toLocaleString("en-IN");

    document.getElementById("estimated-returns").textContent =
        "₹" + Math.round(returns).toLocaleString("en-IN");

    document.getElementById("total-value").textContent =
        "₹" + Math.round(total).toLocaleString("en-IN");
}