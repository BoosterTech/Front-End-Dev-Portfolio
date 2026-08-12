import { skillDescriptions as enSkillDescriptions, skillsets as enSkillsets, toLearn as enToLearn, toLearnDescriptions as enToLearnDescriptions } from "./en";
import { skillDescriptions as esSkillDescriptions, skillsets as esSkillsets, toLearn as esToLearn, toLearnDescriptions as esToLearnDescriptions } from "./es";
import { skillDescriptions as plSkillDescriptions, skillsets as plSkillsets, toLearn as plToLearn, toLearnDescriptions as plToLearnDescriptions } from "./pl";

/** @type {import("../../types").SkillDescriptions} */
export const skillDescriptions = {
  English: enSkillDescriptions,
  Polish: plSkillDescriptions,
  Spanish: esSkillDescriptions,
};

/** @type {import("../../types").SkillSet} */
export const skillsets = {
  English: enSkillsets,
  Polish: plSkillsets,
  Spanish: esSkillsets,
};

/** @type {import("../../types").SkillSet} */
export const toLearn = {
  English: enToLearn,
  Polish: plToLearn,
  Spanish: esToLearn,
};

/** @type {import("../../types").SkillDescriptions} */
export const toLearnDescriptions = {
  English: enToLearnDescriptions,
  Polish: plToLearnDescriptions,
  Spanish: esToLearnDescriptions,
};
