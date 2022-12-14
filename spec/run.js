import Jasmine from "jasmine";
import specReporter from "jasmine-spec-reporter";

const jasmine = new Jasmine();
jasmine.configureDefaultReporter({ print: () => {} });
jasmine.addReporter(new specReporter());
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();
