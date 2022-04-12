import { Request, Response } from "express";
import { IUser } from '../models/WilderSchema';

const WilderModel = require("../models/WilderSchema");

module.exports = {
    create:  async (req: Request, res: Response) => {
       try {
           await WilderModel.init();
           const wilder: IUser = new WilderModel(req.body);
           const result = await wilder.save();
           res.json({success: true, result});
       } catch (err: any) {
            res.status(400).send({error: err.message})
       }
    },

    read: async (req: Request, res: Response) => {
        try {
            const wilders: IUser[] = await WilderModel.find();
            if (!wilders) res.json({success: false, result: "No wilder found"});
            res.json({success: true, result: wilders})
        } catch (err: any) {
            res.json({success: false, result: err});
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const wilder: IUser = await WilderModel.findByIdAndUpdate({ "_id" : req.body._id }, req.body, {new: true})
            if(!wilder) res.json({ success: false, result: "No such wilder exists"})
            res.json(wilder)
      } catch (err: any) {
            res.json({ success: false, result: err})
      }
    },
    delete: async (req: Request, res: Response) => {
        const wilder: IUser = await WilderModel.remove({"_id": req.params.id})
        try {
            if (!wilder) res.json({ success: false, result: "No wilder with such ID was found" })
            res.json({ success: true, result: wilder })
        } catch (err: any) {
            res.json({ success: false, result: err})
        }
    }
};
