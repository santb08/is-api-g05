function buildRiskService(
    // { riskModel}
) {
    return {
        //Define e implementa las reglas de negocio como un servicio de la estimación de perdida esperada utilizando el método del OpVar 
        async deleteOpvar() {
            // TODO: Implement this async function
        },
        async createOpvar() {
            // TODO: Implement this async function
        },
        async getOpvar() {
            // TODO: Implement this async function
            const opVarCalc = Math.random();

            return opVarCalc;
        },
        async getAllOpvar() {
            // TODO: Implement this async function
        },
        
        //Define e implementa las reglas de negocio como un servicio de la estimación de perdida esperada utilizando el método del LDA
        async deleteLDA() {
            // TODO: Implement this async function
        },
        async createLDA() {
            // TODO: Implement this async function
        },
        async getLDA() {
            // TODO: Implement this async function
            const LDACalc = Math.random();

            return LDACalc;
        },
        async getAllLDA() {
            // TODO: Implement this async function
        },
    };
}

module.exports = buildRiskService;
