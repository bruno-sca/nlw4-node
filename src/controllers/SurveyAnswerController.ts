import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../erros/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class SurveyAnswerController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError("SurveyUser does not exists!");
    }

    console.log(surveyUser);

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { SurveyAnswerController };
