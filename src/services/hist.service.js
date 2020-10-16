function buildHistService({
    histModel
}) {
    return {
        async getHistOpvar() {
            const data = histModel.find();

            return data;
        },

        async createHistOpvar({ lostValue, date }) {
            const newHist = histModel.insert({
                date,
                lostValue
            });

            return newHist;
        }
    };
}

module.exports = buildHistService;
