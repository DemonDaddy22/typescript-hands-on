type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplexJob = SimpleJob & {
  // type intersection
  hasManagementRole: boolean;
  reportsToBeCompleted: string[];
};

const complicatedJob: ComplexJob = {
  codingLanguage: 'TypeScript',
  sourceControl: 'git',
  hasManagementRole: true,
  reportsToBeCompleted: ['Weekly Report', 'Monthly Report'],
};

class Job implements SimpleJob {
  codingLanguage: string = 'TypeScript';
  sourceControl: string = 'git';

  display(): void {
    console.log(`This job requires knowledge of ${this.codingLanguage} and ${this.sourceControl}.`);
  }
}

const job = new Job();
job.display();
