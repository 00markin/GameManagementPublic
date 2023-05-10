import { Request, Response } from "express";
import { Setting } from "../entities/Setting";

export class SettingController {
  public async getSetting(req: Request, res: Response) {
    try {
      const setting = await Setting.findOne({
        where: {
          id: req.params.id
        }
      });
      if (setting) {
        res.status(200).json(setting);
      } else {
        res.status(404).send("Setting not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getSettings(req: Request, res: Response) {
    try {
      const settings = await Setting.find();
      res.status(200).json(settings);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createSetting(req: Request, res: Response) {
    try {
      const setting = await Setting.save(req.body);
      res.status(201).json(setting);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateSetting(req: Request, res: Response) {
    try {
      const setting = await Setting.findOne({
        where: {
          id: req.params.id
        }
      });
      if (setting) {
        await setting.save(req.body);
        res.status(200).json(setting);
      } else {
        res.status(404).send("Setting not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteSetting(req: Request, res: Response) {
    try {
      const setting = await Setting.findOne({
        where: {
          id: req.params.id
        }
      });
      if (setting) {
        await setting.remove();
        res.status(200).send("Setting deleted");
      } else {
        res.status(404).send("Setting not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}