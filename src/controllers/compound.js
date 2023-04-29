const {Compound} = require("../models/compound.model");

module.exports = {

    /**
     * Compound list api with pagination 
     * @param {*} req :- {query: {page: number, limit: number}}
     * @param {*} res 
     * @returns 
     */
    list: async (req, res) => {
        try {
            const query = {
                attributes: ["id","CompoundName","CompounrDescription","strImageSource","strImageAttribution"],
                limit: Number(req.query.limit),
                offset: (Number(req.query.page)-1) * Number(req.query.limit)
            }
            const {count, rows} = await Compound.findAndCountAll(query);
            response.statusCode = routes.SUCCESSCODE;
            response.message = "list";
            response.data = rows;
            response.paginationData = {total: count, limit: Number(req.query.limit), pageNo: Number(req.query.page)};
            return routes.SendResponse(res);
        } catch (error) {
            response.statusCode = routes.EXCEPTIONCODE;
            response.message = error.message ? error.message : routes.ERRORMESSAGE;
            return routes.SendResponse(res);
        }
    },

    /**
     * Method to Edit compounds detail
     * @param {*} req :- {
     *                      query: {
     *                          id:string
     *                      },
     *                      body:{
     *                          CompoundName:string,
     *                          CompounrDescription:string,
     *                          strImageSource:string,
     *                          strImageAttribution:string
     *                      }
     *                    }
     * @param {*} res 
     * @returns 
     */
    update: async (req, res) => {
        try {
            const data = await Compound.update(req.body,{where:req.query});
            if (!data.length || data[0] == 0) {
                response.statusCode = routes.ERRORCODE;
                response.message = "Compound not found";
                response.data = data;
                return routes.SendResponse(res);
            }
            response.statusCode = routes.SUCCESSCODE;
            response.message = "Compound has been updated successfully";
            response.data = {...req.body, id: req.query.id};
            return routes.SendResponse(res);
        } catch (error){
            response.statusCode = routes.EXCEPTIONCODE;
            response.message = error.message ? error.message : routes.ERRORMESSAGE;
            return routes.SendResponse(res);
        }
    },

    delail: async (req, res) => {
        try {
            const data = await Compound.findByPk(req.query.id, {attributes: ["id","CompoundName","CompounrDescription","strImageSource","strImageAttribution"]});
            if (!data) {
                response.statusCode = routes.ERRORCODE;
                response.message = "Compound not found";
                return routes.SendResponse(res);
            }
            response.statusCode = routes.SUCCESSCODE;
            response.message = "Compound detail";
            response.data = data;
            return routes.SendResponse(res);
        } catch (error){
            response.statusCode = routes.EXCEPTIONCODE;
            response.message = error.message ? error.message : routes.ERRORMESSAGE;
            return routes.SendResponse(res);
        }
    }
}