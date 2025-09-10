"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const complicatedJob = {
    codingLanguage: 'TypeScript',
    sourceControl: 'git',
    hasManagementRole: true,
    reportsToBeCompleted: ['Weekly Report', 'Monthly Report'],
};
class Job {
    codingLanguage = 'TypeScript';
    sourceControl = 'git';
    display() {
        console.log(`This job requires knowledge of ${this.codingLanguage} and ${this.sourceControl}.`);
    }
}
const job = new Job();
job.display();
//# sourceMappingURL=typeIntersection.js.map