function buildInfoService({
    infoModel
}) {
    return {
        async getInformes() {
            const data = await infoModel.find();
            return data;
        },

        async createInform(data) {
            const newInforme = infoModel.insert({
                data,
            });

            return newInforme;
        }
    };
}

module.exports = buildInfoService;