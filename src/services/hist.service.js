function buildHistService({
    histModel
}) {
    return {
        async getHistOpvar() {
            const data = await histModel.find();

            return data;
        },

        async createHistOpvar({ data, date, name }) {
            const newHist = histModel.insert({
                hist: data.split(','),
                date,
                name
            });

            return newHist;
        }
    };
}

module.exports = buildHistService;
