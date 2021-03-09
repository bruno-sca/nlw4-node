import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { SurveysController } from "./controllers/SurveyController";
import { SendSurveyController } from "./controllers/SendSurveyController";
import { SurveyAnswerController } from "./controllers/SurveyAnswerController";
import { NpsController } from "./controllers/NpsController";

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();
const sendSurveyController = new SendSurveyController();
const surveyAnswerController = new SurveyAnswerController();
const npsController = new NpsController();

router.post("/users", usersController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

router.post("/sendSurvey", sendSurveyController.execute);

router.get("/answers/:value", surveyAnswerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export { router };
