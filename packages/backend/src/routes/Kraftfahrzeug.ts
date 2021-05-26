import StatusCodes from "http-status-codes";
import { Request, Response } from "express";

import KraftfahrzeugModel from "../../models/Kraftfahrzeug";

import { paramMissingError } from "@shared/constants";

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all kraftfahrzeuge.
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAllKraftfahrzeuge(req: Request, res: Response) {
  const kraftfahrzeuge: Array<Kraftfahrzeug> = await KraftfahrzeugModel.find(
    {}
  ).exec();
  return res.status(OK).json(kraftfahrzeuge);
}

/**
 * Add one kraftfahrzeug.
 *
 * @param req
 * @param res
 * @returns
 */
export async function addOneKraftfahrzeug(req: Request, res: Response) {
  const { kraftfahrzeug } = req.body;
  if (!kraftfahrzeug) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  // TODO get info from database
  // await KraftfahrzeugModel.add(kraftfahrzeug);
  return res.status(CREATED).end();
}

/**
 * Update one kraftfahrzeug.
 *
 * @param req
 * @param res
 * @returns
 */
export async function updateOneKraftfahrzeug(req: Request, res: Response) {
  const { kraftfahrzeug } = req.body;
  if (!kraftfahrzeug) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  kraftfahrzeug.id = Number(kraftfahrzeug.id);
  await KraftfahrzeugModel.update(kraftfahrzeug);
  return res.status(OK).end();
}

/**
 * Delete one kraftfahrzeug.
 *
 * @param req
 * @param res
 * @returns
 */
export async function deleteOneKraftfahrzeug(req: Request, res: Response) {
  const { id } = req.params;
  await KraftfahrzeugModel.findByIdAndUpdate(Number(id), { delete: true });
  return res.status(OK).end();
}
