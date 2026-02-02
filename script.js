

class GradeX {
    constructor() {
        this.courses = [];
        this.nextId = 1;
        this.currentProgram = '';
        this.currentSemester = '';
        this.isDarkMode = false;
        
       
        this.curriculum = {
            'BSSE': {
                '1': [
                    { code: 'SE-1101', name: 'Introduction to Software Engineering', credits: 3 },
                    { code: 'CS-1101', name: 'Introduction to Computing', credits: 3 },
                    { code: 'MTH-1101', name: 'Calculus & Analytical Geometry', credits: 3 },
                    { code: 'ENG-1101', name: 'English Composition & Comprehension', credits: 3 },
                    { code: 'PHY-1101', name: 'Applied Physics', credits: 3 },
                    { code: 'IS-1101', name: 'Islamic Studies', credits: 2 }
                ],
                '2': [
                    { code: 'SE-1201', name: 'Object Oriented Programming', credits: 3 },
                    { code: 'CS-1201', name: 'Digital Logic Design', credits: 3 },
                    { code: 'MTH-1201', name: 'Discrete Mathematics', credits: 3 },
                    { code: 'ENG-1201', name: 'Communication & Presentation Skills', credits: 3 },
                    { code: 'MTH-1202', name: 'Linear Algebra', credits: 3 },
                    { code: 'PS-1201', name: 'Pakistan Studies', credits: 2 }
                ],
                '3': [
                    { code: 'SE-2101', name: 'Data Structures & Algorithms', credits: 3 },
                    { code: 'SE-2102', name: 'Software Requirements Engineering', credits: 3 },
                    { code: 'CS-2101', name: 'Computer Organization & Assembly Language', credits: 3 },
                    { code: 'MTH-2101', name: 'Differential Equations', credits: 3 },
                    { code: 'SE-2103', name: 'Human Computer Interaction', credits: 3 },
                    { code: 'SS-2101', name: 'Professional Practices', credits: 2 }
                ],
                '4': [
                    { code: 'SE-2201', name: 'Software Design & Architecture', credits: 3 },
                    { code: 'SE-2202', name: 'Database Systems', credits: 3 },
                    { code: 'SE-2203', name: 'Software Construction', credits: 3 },
                    { code: 'CS-2201', name: 'Operating Systems', credits: 3 },
                    { code: 'MTH-2201', name: 'Probability & Statistics', credits: 3 },
                    { code: 'SE-2204', name: 'Technical & Business Writing', credits: 2 }
                ],
                '5': [
                    { code: 'SE-3101', name: 'Software Quality Assurance', credits: 3 },
                    { code: 'SE-3102', name: 'Computer Networks', credits: 3 },
                    { code: 'SE-3103', name: 'Web Engineering', credits: 3 },
                    { code: 'SE-3104', name: 'Formal Methods in Software Engineering', credits: 3 },
                    { code: 'SE-3105', name: 'Information Security', credits: 3 },
                    { code: 'ELEC-3101', name: 'Technical Elective I', credits: 3 }
                ],
                '6': [
                    { code: 'SE-3201', name: 'Software Project Management', credits: 3 },
                    { code: 'SE-3202', name: 'Software Testing', credits: 3 },
                    { code: 'SE-3203', name: 'Mobile Application Development', credits: 3 },
                    { code: 'SE-3204', name: 'Software Re-engineering', credits: 3 },
                    { code: 'ELEC-3201', name: 'Technical Elective II', credits: 3 },
                    { code: 'SE-3205', name: 'Final Year Project - I', credits: 3 }
                ],
                '7': [
                    { code: 'SE-4101', name: 'Enterprise Application Development', credits: 3 },
                    { code: 'SE-4102', name: 'Software Maintenance', credits: 3 },
                    { code: 'SE-4103', name: 'Cloud Computing', credits: 3 },
                    { code: 'ELEC-4101', name: 'Technical Elective III', credits: 3 },
                    { code: 'ELEC-4102', name: 'Technical Elective IV', credits: 3 },
                    { code: 'SE-4104', name: 'Final Year Project - II', credits: 3 }
                ],
                '8': [
                    { code: 'SE-4201', name: 'Software Metrics', credits: 3 },
                    { code: 'SE-4202', name: 'Software Process Improvement', credits: 3 },
                    { code: 'SE-4203', name: 'Big Data Analytics', credits: 3 },
                    { code: 'ELEC-4201', name: 'Technical Elective V', credits: 3 },
                    { code: 'SE-4204', name: 'Final Year Project - III', credits: 3 },
                    { code: 'INT-4201', name: 'Internship', credits: 3 }
                ]
            },
            'BSCS': {
                '1': [
                    { code: 'CS-1101', name: 'Introduction to Computing', credits: 3 },
                    { code: 'CS-1102', name: 'Programming Fundamentals', credits: 3 },
                    { code: 'MTH-1101', name: 'Calculus & Analytical Geometry', credits: 3 },
                    { code: 'ENG-1101', name: 'English Composition', credits: 3 },
                    { code: 'PHY-1101', name: 'Applied Physics', credits: 3 },
                    { code: 'IS-1101', name: 'Islamic Studies', credits: 2 }
                ],
                '2': [
                    { code: 'CS-1201', name: 'Object Oriented Programming', credits: 3 },
                    { code: 'CS-1202', name: 'Digital Logic Design', credits: 3 },
                    { code: 'MTH-1201', name: 'Discrete Structures', credits: 3 },
                    { code: 'ENG-1201', name: 'Communication Skills', credits: 3 },
                    { code: 'MTH-1202', name: 'Linear Algebra', credits: 3 },
                    { code: 'PS-1201', name: 'Pakistan Studies', credits: 2 }
                ],
                '3': [
                    { code: 'CS-2101', name: 'Data Structures', credits: 3 },
                    { code: 'CS-2102', name: 'Computer Organization & Assembly Language', credits: 3 },
                    { code: 'CS-2103', name: 'Database Systems', credits: 3 },
                    { code: 'MTH-2101', name: 'Probability & Statistics', credits: 3 },
                    { code: 'CS-2104', name: 'Theory of Automata', credits: 3 },
                    { code: 'SS-2101', name: 'Professional Practices', credits: 2 }
                ],
                '4': [
                    { code: 'CS-2201', name: 'Operating Systems', credits: 3 },
                    { code: 'CS-2202', name: 'Design & Analysis of Algorithms', credits: 3 },
                    { code: 'CS-2203', name: 'Software Engineering', credits: 3 },
                    { code: 'CS-2204', name: 'Computer Networks', credits: 3 },
                    { code: 'CS-2205', name: 'Numerical Computing', credits: 3 },
                    { code: 'CS-2206', name: 'Technical Writing', credits: 2 }
                ],
                '5': [
                    { code: 'CS-3101', name: 'Artificial Intelligence', credits: 3 },
                    { code: 'CS-3102', name: 'Web Technologies', credits: 3 },
                    { code: 'CS-3103', name: 'Computer Graphics', credits: 3 },
                    { code: 'CS-3104', name: 'Parallel & Distributed Computing', credits: 3 },
                    { code: 'CS-3105', name: 'Information Security', credits: 3 },
                    { code: 'ELEC-3101', name: 'Elective I', credits: 3 }
                ],
                '6': [
                    { code: 'CS-3201', name: 'Data Mining', credits: 3 },
                    { code: 'CS-3202', name: 'Compiler Construction', credits: 3 },
                    { code: 'CS-3203', name: 'Mobile Application Development', credits: 3 },
                    { code: 'CS-3204', name: 'Human Computer Interaction', credits: 3 },
                    { code: 'ELEC-3201', name: 'Elective II', credits: 3 },
                    { code: 'CS-3205', name: 'Final Year Project - I', credits: 3 }
                ],
                '7': [
                    { code: 'CS-4101', name: 'Machine Learning', credits: 3 },
                    { code: 'CS-4102', name: 'Cloud Computing', credits: 3 },
                    { code: 'CS-4103', name: 'Big Data Analytics', credits: 3 },
                    { code: 'ELEC-4101', name: 'Elective III', credits: 3 },
                    { code: 'ELEC-4102', name: 'Elective IV', credits: 3 },
                    { code: 'CS-4104', name: 'Final Year Project - II', credits: 3 }
                ],
                '8': [
                    { code: 'CS-4201', name: 'Natural Language Processing', credits: 3 },
                    { code: 'CS-4202', name: 'Computer Vision', credits: 3 },
                    { code: 'CS-4203', name: 'Internet of Things', credits: 3 },
                    { code: 'ELEC-4201', name: 'Elective V', credits: 3 },
                    { code: 'CS-4204', name: 'Final Year Project - III', credits: 3 },
                    { code: 'INT-4201', name: 'Internship', credits: 3 }
                ]
            },
            'BBA': {
                '1': [
                    { code: 'ACC-1101', name: 'Principles of Accounting', credits: 3 },
                    { code: 'ECO-1101', name: 'Principles of Microeconomics', credits: 3 },
                    { code: 'MGT-1101', name: 'Principles of Management', credits: 3 },
                    { code: 'ENG-1101', name: 'English Composition', credits: 3 },
                    { code: 'MTH-1101', name: 'Business Mathematics', credits: 3 },
                    { code: 'IS-1101', name: 'Islamic Studies', credits: 2 }
                ],
                '2': [
                    { code: 'ACC-1201', name: 'Financial Accounting', credits: 3 },
                    { code: 'ECO-1201', name: 'Principles of Macroeconomics', credits: 3 },
                    { code: 'MKT-1201', name: 'Principles of Marketing', credits: 3 },
                    { code: 'ENG-1201', name: 'Business Communication', credits: 3 },
                    { code: 'MTH-1201', name: 'Business Statistics', credits: 3 },
                    { code: 'PS-1201', name: 'Pakistan Studies', credits: 2 }
                ],
                '3': [
                    { code: 'FIN-2101', name: 'Financial Management', credits: 3 },
                    { code: 'MGT-2101', name: 'Organizational Behavior', credits: 3 },
                    { code: 'MIS-2101', name: 'Management Information Systems', credits: 3 },
                    { code: 'LAW-2101', name: 'Business Law', credits: 3 },
                    { code: 'ECO-2101', name: 'Money & Banking', credits: 3 },
                    { code: 'SS-2101', name: 'Professional Ethics', credits: 2 }
                ],
                '4': [
                    { code: 'MKT-2201', name: 'Consumer Behavior', credits: 3 },
                    { code: 'HRM-2201', name: 'Human Resource Management', credits: 3 },
                    { code: 'FIN-2201', name: 'Corporate Finance', credits: 3 },
                    { code: 'OPS-2201', name: 'Operations Management', credits: 3 },
                    { code: 'RES-2201', name: 'Business Research Methods', credits: 3 },
                    { code: 'COM-2201', name: 'Business Report Writing', credits: 2 }
                ],
                '5': [
                    { code: 'MGT-3101', name: 'Strategic Management', credits: 3 },
                    { code: 'MKT-3101', name: 'Marketing Research', credits: 3 },
                    { code: 'FIN-3101', name: 'Investment Analysis', credits: 3 },
                    { code: 'HRM-3101', name: 'Training & Development', credits: 3 },
                    { code: 'ECO-3101', name: 'International Economics', credits: 3 },
                    { code: 'ELEC-3101', name: 'Business Elective I', credits: 3 }
                ],
                '6': [
                    { code: 'ENT-3201', name: 'Entrepreneurship', credits: 3 },
                    { code: 'MKT-3201', name: 'Digital Marketing', credits: 3 },
                    { code: 'FIN-3201', name: 'Risk Management', credits: 3 },
                    { code: 'MGT-3201', name: 'Leadership & Change Management', credits: 3 },
                    { code: 'ELEC-3201', name: 'Business Elective II', credits: 3 },
                    { code: 'PRO-3201', name: 'Business Project - I', credits: 3 }
                ],
                '7': [
                    { code: 'INT-4101', name: 'International Business', credits: 3 },
                    { code: 'MKT-4101', name: 'Brand Management', credits: 3 },
                    { code: 'FIN-4101', name: 'Financial Markets', credits: 3 },
                    { code: 'HRM-4101', name: 'Compensation Management', credits: 3 },
                    { code: 'ELEC-4101', name: 'Business Elective III', credits: 3 },
                    { code: 'PRO-4101', name: 'Business Project - II', credits: 3 }
                ],
                '8': [
                    { code: 'MGT-4201', name: 'Business Policy', credits: 3 },
                    { code: 'MKT-4201', name: 'Services Marketing', credits: 3 },
                    { code: 'FIN-4201', name: 'Islamic Banking & Finance', credits: 3 },
                    { code: 'ELEC-4201', name: 'Business Elective IV', credits: 3 },
                    { code: 'PRO-4201', name: 'Business Project - III', credits: 3 },
                    { code: 'INT-4201', name: 'Internship', credits: 3 }
                ]
            }
        };
        
        this.initialize();
    }

    initialize() {
        // Set up Toastr
        toastr.options = {
            positionClass: "toast-top-right",
            timeOut: 3000,
            progressBar: true,
            closeButton: true
        };

        this.loadCourses();
        this.setupEventListeners();
        this.updateStats();
        this.updateGradePreview();
        this.initTheme();
        this.setupCurriculumButtons();
        this.setupMobileMenu();
        this.addCurriculumSection();
    }

    initTheme() {
        const savedTheme = localStorage.getItem('gradex_theme');
        this.isDarkMode = savedTheme === 'dark';
        
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
            const themeIcon = document.querySelector('.theme-toggle i');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode');
        
        const themeIcon = document.querySelector('.theme-toggle i');
        if (themeIcon) {
            if (this.isDarkMode) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('gradex_theme', 'dark');
                toastr.info('Dark mode enabled');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('gradex_theme', 'light');
                toastr.info('Light mode enabled');
            }
        }
    }

    setupEventListeners() {
        // Form submission
        setTimeout(() => {
            const courseForm = document.getElementById('courseForm');
            if (courseForm) {
                courseForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
            }
        }, 100);
        
        // Slider events
        setTimeout(() => {
            const marksSlider = document.getElementById('marks');
            const creditSlider = document.getElementById('creditHours');
            
            if (marksSlider) {
                marksSlider.addEventListener('input', () => this.updateGradePreview());
            }
            if (creditSlider) {
                creditSlider.addEventListener('input', () => this.updateGradePreview());
            }
        }, 100);
        
        // Theme toggle
        setTimeout(() => {
            const themeToggle = document.querySelector('.theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => this.toggleTheme());
            }
        }, 100);
        
        // Program and semester selection
        setTimeout(() => {
            const programSelect = document.getElementById('programSelect');
            const semesterSelect = document.getElementById('semesterSelect');
            
            if (programSelect) {
                programSelect.addEventListener('change', (e) => {
                    this.currentProgram = e.target.value;
                    this.updateCourseCodeExamples();
                    this.showCurriculumCourses();
                });
            }
            
            if (semesterSelect) {
                semesterSelect.addEventListener('change', (e) => {
                    this.currentSemester = e.target.value;
                    this.showCurriculumCourses();
                });
            }
        }, 100);
        
        // Quick actions
        setTimeout(() => {
            const calculateBtn = document.getElementById('calculateAllBtn');
            const exportBtn = document.getElementById('exportBtn');
            const saveBtn = document.getElementById('saveBtn');
            const resetBtn = document.getElementById('resetBtn');
            const sortBtn = document.getElementById('sortBtn');
            const filterBtn = document.getElementById('filterBtn');
            
            if (calculateBtn) calculateBtn.addEventListener('click', () => this.calculateGPA());
            if (exportBtn) exportBtn.addEventListener('click', () => this.exportReport());
            if (saveBtn) saveBtn.addEventListener('click', () => this.saveData());
            if (resetBtn) resetBtn.addEventListener('click', () => this.resetAll());
            if (sortBtn) sortBtn.addEventListener('click', () => this.sortCourses());
            if (filterBtn) filterBtn.addEventListener('click', () => this.filterCourses());
        }, 100);
        
        // Target GPA editing
        setTimeout(() => {
            const targetGpa = document.getElementById('targetGpa');
            if (targetGpa) {
                targetGpa.addEventListener('input', (e) => {
                    this.calculateRequiredForTarget();
                });
                
                targetGpa.addEventListener('blur', (e) => {
                    let value = parseFloat(e.target.textContent);
                    if (isNaN(value) || value < 0 || value > 4.0) {
                        e.target.textContent = '3.50';
                        toastr.error('Please enter a valid GPA between 0.00 and 4.00');
                    }
                    this.calculateRequiredForTarget();
                });
            }
        }, 100);
    }

    setupMobileMenu() {
        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const leftPanel = document.querySelector('.left-panel');
                if (leftPanel) {
                    leftPanel.classList.toggle('mobile-visible');
                    document.body.classList.toggle('menu-open');
                    mobileMenuBtn.classList.toggle('active');
                }
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const leftPanel = document.querySelector('.left-panel');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            if (leftPanel && 
                !e.target.closest('.left-panel') && 
                !e.target.closest('#mobileMenuBtn') &&
                window.innerWidth <= 768) {
                leftPanel.classList.remove('mobile-visible');
                document.body.classList.remove('menu-open');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
        });
    }

    setupCurriculumButtons() {
        // Create curriculum courses section
        this.createCurriculumSection();
    }

    createCurriculumSection() {
        setTimeout(() => {
            const rightPanel = document.querySelector('.right-panel');
            if (rightPanel && !document.getElementById('curriculumCourses')) {
                const curriculumCard = document.createElement('div');
                curriculumCard.className = 'card';
                curriculumCard.innerHTML = `
                    <div class="card-header">
                        <h3><i class="fas fa-book"></i> SZABIST Curriculum Courses</h3>
                    </div>
                    <div class="card-body">
                        <div id="curriculumCourses">
                            <div class="empty-state">
                                <i class="fas fa-graduation-cap"></i>
                                <h4>Select Program & Semester</h4>
                                <p>Choose your program and semester to see the curriculum courses</p>
                            </div>
                        </div>
                    </div>
                `;
                
                const coursesCard = rightPanel.querySelector('.card');
                if (coursesCard) {
                    coursesCard.insertAdjacentElement('afterend', curriculumCard);
                }
            }
        }, 200);
    }

    addCurriculumSection() {
        // This is a backup method to ensure curriculum section is added
        setTimeout(() => {
            if (!document.getElementById('curriculumCourses')) {
                this.createCurriculumSection();
            }
        }, 500);
    }

    showCurriculumCourses() {
        const program = this.currentProgram;
        const semester = this.currentSemester;
        const curriculumDiv = document.getElementById('curriculumCourses');
        
        if (!curriculumDiv) {
            this.addCurriculumSection();
            setTimeout(() => this.showCurriculumCourses(), 100);
            return;
        }
        
        if (!program || !semester) {
            curriculumDiv.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-graduation-cap"></i>
                    <h4>Select Program & Semester</h4>
                    <p>Choose your program and semester to see the curriculum courses</p>
                </div>
            `;
            return;
        }
        
        if (!this.curriculum[program] || !this.curriculum[program][semester]) {
            curriculumDiv.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-exclamation-circle"></i>
                    <h4>No Curriculum Found</h4>
                    <p>No curriculum available for ${program} Semester ${semester}</p>
                </div>
            `;
            return;
        }
        
        const courses = this.curriculum[program][semester];
        let html = `
            <div class="curriculum-header">
                <h4>${program} - Semester ${semester}</h4>
                <button class="btn btn-sm btn-primary" id="addAllCoursesBtn">
                    <i class="fas fa-plus"></i> Add All Courses
                </button>
            </div>
            <div class="curriculum-list">
        `;
        
        courses.forEach((course, index) => {
            html += `
                <div class="curriculum-item" data-index="${index}">
                    <div class="curriculum-info">
                        <div class="curriculum-code">${course.code}</div>
                        <div class="curriculum-name">${course.name}</div>
                        <div class="curriculum-credits">${course.credits} Credits</div>
                    </div>
                    <button class="btn-icon small add-course-btn" 
                            data-code="${course.code}" 
                            data-name="${course.name}" 
                            data-credits="${course.credits}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            `;
        });
        
        html += `</div>`;
        curriculumDiv.innerHTML = html;
        
        // Add event listeners to Add All button
        const addAllBtn = document.getElementById('addAllCoursesBtn');
        if (addAllBtn) {
            addAllBtn.addEventListener('click', () => this.addAllCurriculumCourses(courses));
        }
        
        // Add event listeners to individual add buttons
        document.querySelectorAll('.add-course-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const code = e.target.closest('.add-course-btn').dataset.code;
                const name = e.target.closest('.add-course-btn').dataset.name;
                const credits = parseInt(e.target.closest('.add-course-btn').dataset.credits);
                
                this.addCurriculumCourse({ code, name, credits });
            });
        });
    }

    addCurriculumCourse(courseData) {
        // Populate form with curriculum course
        document.getElementById('courseCode').value = courseData.code;
        document.getElementById('courseName').value = courseData.name;
        document.getElementById('creditHours').value = courseData.credits;
        
        // Set default marks (85) and update preview
        document.getElementById('marks').value = 85;
        this.updateGradePreview();
        
        // Set category based on course code
        const codePrefix = courseData.code.split('-')[0];
        const categoryMap = {
            'SE': 'SE', 'CS': 'CS', 'CSCL': 'CSCL', 'MTH': 'MTH',
            'ENG': 'GEN', 'PHY': 'GEN', 'IS': 'GEN', 'PS': 'GEN',
            'ACC': 'BBA', 'ECO': 'BBA', 'MGT': 'MGT', 'MKT': 'BBA',
            'FIN': 'BBA', 'HRM': 'MGT', 'LAW': 'GEN', 'OPS': 'MGT'
        };
        
        document.getElementById('courseCategory').value = categoryMap[codePrefix] || 'GEN';
        
        toastr.info(`Loaded ${courseData.code}. Enter marks and click "Add Course"`);
        
        // Scroll to form
        document.getElementById('courseCode').focus();
    }

    addAllCurriculumCourses(courses) {
        if (!confirm(`Add all ${courses.length} courses from the curriculum?`)) {
            return;
        }
        
        let addedCount = 0;
        courses.forEach(course => {
            const gradeInfo = this.calculateGrade(85); // Default 85 marks
            const newCourse = {
                id: this.nextId++,
                program: this.currentProgram,
                semester: this.currentSemester,
                session: document.getElementById('sessionSelect').value,
                category: course.code.split('-')[0],
                code: course.code,
                name: course.name,
                credits: course.credits,
                marks: 85,
                grade: gradeInfo.grade,
                points: gradeInfo.points,
                qualityPoints: (gradeInfo.points * course.credits).toFixed(2),
                status: gradeInfo.status,
                className: gradeInfo.className,
                addedAt: new Date().toISOString()
            };
            
            this.courses.push(newCourse);
            addedCount++;
        });
        
        this.updateCoursesTable();
        this.updateStats();
        this.saveCourses();
        
        toastr.success(`Added ${addedCount} courses from curriculum`);
    }

    calculateGrade(marks) {
        if (marks >= 90) return { grade: 'A+', points: 4.00, className: 'grade-A', status: 'excellent' };
        if (marks >= 85) return { grade: 'A', points: 3.75, className: 'grade-A', status: 'excellent' };
        if (marks >= 80) return { grade: 'A-', points: 3.50, className: 'grade-B', status: 'good' };
        if (marks >= 75) return { grade: 'B+', points: 3.25, className: 'grade-B', status: 'good' };
        if (marks >= 70) return { grade: 'B', points: 3.00, className: 'grade-C', status: 'average' };
        if (marks >= 66) return { grade: 'B-', points: 2.75, className: 'grade-C', status: 'average' };
        if (marks >= 63) return { grade: 'C+', points: 2.50, className: 'grade-C', status: 'passing' };
        if (marks >= 60) return { grade: 'C', points: 2.00, className: 'grade-C', status: 'passing' };
        if (marks >= 55) return { grade: 'C-', points: 1.50, className: 'grade-F', status: 'min-pass' };
        return { grade: 'F', points: 0.00, className: 'grade-F', status: 'fail' };
    }

    updateGradePreview() {
        const marks = parseInt(document.getElementById('marks').value) || 85;
        const credits = parseInt(document.getElementById('creditHours').value) || 3;
        
        document.getElementById('marksValue').textContent = marks;
        document.getElementById('creditValue').textContent = credits;
        
        const gradeInfo = this.calculateGrade(marks);
        const qualityPoints = (gradeInfo.points * credits).toFixed(2);
        
        // Update preview elements
        const previewMarks = document.getElementById('previewMarks');
        const previewGrade = document.getElementById('previewGrade');
        const previewPoints = document.getElementById('previewPoints');
        const previewQuality = document.getElementById('previewQuality');
        
        if (previewMarks) previewMarks.textContent = marks;
        if (previewGrade) {
            previewGrade.textContent = gradeInfo.grade;
            previewGrade.className = `preview-value ${gradeInfo.className}`;
        }
        if (previewPoints) previewPoints.textContent = gradeInfo.points.toFixed(2);
        if (previewQuality) previewQuality.textContent = qualityPoints;
    }

    updateCourseCodeExamples() {
        const program = this.currentProgram;
        const examples = {
            'BSSE': 'SE-1205, SE-1230, CSCL-1201',
            'BSCS': 'CS-101, CS-201, CS-301',
            'BBA': 'BBA-101, MGT-201, ACC-301',
            'MSSE': 'SE-501, SE-502, SE-503',
            'MSCS': 'CS-501, CS-502, CS-503',
            'MBA': 'MBA-501, MBA-502, MBA-503'
        };
        
        const input = document.getElementById('courseCode');
        if (input && examples[program]) {
            input.placeholder = `e.g., ${examples[program]}`;
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const program = document.getElementById('programSelect').value;
        const semester = document.getElementById('semesterSelect').value;
        const session = document.getElementById('sessionSelect').value;
        const category = document.getElementById('courseCategory').value;
        const code = document.getElementById('courseCode').value.trim().toUpperCase();
        const name = document.getElementById('courseName').value.trim();
        const credits = parseInt(document.getElementById('creditHours').value) || 3;
        const marks = parseInt(document.getElementById('marks').value) || 85;
        
        // Validate inputs
        if (!program || !semester) {
            toastr.error('Please select your program and semester first');
            return;
        }
        
        if (!category) {
            toastr.error('Please select course category');
            return;
        }
        
        if (!code || code === '') {
            toastr.error('Please enter course code');
            return;
        }
        
        if (!name || name === '') {
            toastr.error('Please enter course name');
            return;
        }
        
        const gradeInfo = this.calculateGrade(marks);
        
        const course = {
            id: this.nextId++,
            program,
            semester,
            session,
            category,
            code,
            name,
            credits,
            marks,
            grade: gradeInfo.grade,
            points: gradeInfo.points,
            qualityPoints: (gradeInfo.points * credits).toFixed(2),
            status: gradeInfo.status,
            className: gradeInfo.className,
            addedAt: new Date().toISOString()
        };
        
        this.courses.push(course);
        this.addCourseToTable(course);
        this.updateStats();
        this.saveCourses();
        
        // Reset form but keep program and semester
        document.getElementById('courseCode').value = '';
        document.getElementById('courseName').value = '';
        document.getElementById('courseCategory').value = '';
        document.getElementById('creditHours').value = 3;
        document.getElementById('marks').value = 85;
        this.updateGradePreview();
        
        toastr.success(`Added ${code} - ${gradeInfo.grade} grade`);
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            const leftPanel = document.querySelector('.left-panel');
            if (leftPanel) {
                leftPanel.classList.remove('mobile-visible');
                document.body.classList.remove('menu-open');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
        }
    }

    addCourseToTable(course) {
        const tbody = document.getElementById('coursesBody');
        const emptyRow = tbody.querySelector('.empty-row');
        
        if (emptyRow) {
            emptyRow.remove();
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${course.code}</strong></td>
            <td>
                <div class="course-name">${course.name}</div>
                <small class="course-meta">${course.category} • Sem ${course.semester}</small>
            </td>
            <td>${course.category}</td>
            <td class="text-center">${course.credits}</td>
            <td class="text-center">${course.marks}</td>
            <td class="text-center">
                <span class="grade-badge ${course.grade}">${course.grade}</span>
            </td>
            <td class="text-center"><strong>${course.points.toFixed(2)}</strong></td>
            <td class="text-center">
                <button class="btn-icon small delete-btn" data-id="${course.id}" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="btn-icon small edit-btn" data-id="${course.id}" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
        
        // Add event listeners to buttons
        row.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.deleteCourse(course.id);
        });
        
        row.querySelector('.edit-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.editCourse(course.id);
        });
    }

    deleteCourse(id) {
        if (!confirm('Are you sure you want to delete this course?')) return;
        
        const index = this.courses.findIndex(c => c.id === id);
        if (index !== -1) {
            const courseCode = this.courses[index].code;
            this.courses.splice(index, 1);
            this.updateCoursesTable();
            this.updateStats();
            this.saveCourses();
            toastr.success(`Deleted ${courseCode}`);
        }
    }

    editCourse(id) {
        const course = this.courses.find(c => c.id === id);
        if (course) {
            // Populate form with course data
            document.getElementById('courseCode').value = course.code;
            document.getElementById('courseName').value = course.name;
            document.getElementById('courseCategory').value = course.category;
            document.getElementById('creditHours').value = course.credits;
            document.getElementById('marks').value = course.marks;
            
            // Update sliders
            const marksSlider = document.getElementById('marks');
            const creditSlider = document.getElementById('creditHours');
            if (marksSlider) marksSlider.value = course.marks;
            if (creditSlider) creditSlider.value = course.credits;
            
            // Update preview
            this.updateGradePreview();
            
            // Remove course from array
            this.courses = this.courses.filter(c => c.id !== id);
            this.updateCoursesTable();
            this.updateStats();
            
            toastr.info('Course loaded for editing. Make changes and click Add Course.');
        }
    }

    updateCoursesTable() {
        const tbody = document.getElementById('coursesBody');
        tbody.innerHTML = '';
        
        if (this.courses.length === 0) {
            tbody.innerHTML = `
                <tr class="empty-row">
                    <td colspan="8">
                        <div class="empty-state">
                            <i class="fas fa-book-open"></i>
                            <h4>No Courses Added</h4>
                            <p>Start by adding your first course using the form on the left</p>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }
        
        this.courses.forEach(course => this.addCourseToTable(course));
    }

    calculateGPA() {
        if (this.courses.length === 0) {
            toastr.warning('No courses to calculate. Add courses first.');
            return 0.00;
        }
        
        let totalQualityPoints = 0;
        let totalCredits = 0;
        
        this.courses.forEach(course => {
            totalQualityPoints += parseFloat(course.qualityPoints);
            totalCredits += course.credits;
        });
        
        const gpa = totalCredits > 0 ? (totalQualityPoints / totalCredits).toFixed(2) : 0;
        const gpaNum = parseFloat(gpa);
        
        // Update display
        const currentGpaElement = document.getElementById('currentGpa');
        const totalQualityElement = document.getElementById('totalQualityPoints');
        
        if (currentGpaElement) currentGpaElement.textContent = gpa;
        if (totalQualityElement) totalQualityElement.textContent = totalQualityPoints.toFixed(2);
        
        // Update status
        let status = '';
        let statusClass = '';
        
        if (gpaNum >= 3.75) {
            status = "Dean's List 🎉";
            statusClass = 'excellent';
        } else if (gpaNum >= 3.50) {
            status = "Excellent 👍";
            statusClass = 'excellent';
        } else if (gpaNum >= 3.00) {
            status = "Very Good";
            statusClass = 'good';
        } else if (gpaNum >= 2.50) {
            status = "Good";
            statusClass = 'average';
        } else if (gpaNum >= 2.00) {
            status = "Satisfactory";
            statusClass = 'passing';
        } else if (gpaNum >= 1.50) {
            status = "Passing ⚠️";
            statusClass = 'min-pass';
        } else {
            status = "Needs Improvement ❌";
            statusClass = 'fail';
        }
        
        const statusBadge = document.getElementById('gpaStatus');
        if (statusBadge) {
            statusBadge.textContent = status;
            statusBadge.className = `status-badge ${statusClass}`;
        }
        
        // Update trend
        const trendElement = document.querySelector('#currentGpa')?.closest('.stat-card')?.querySelector('.stat-trend');
        if (trendElement) {
            trendElement.innerHTML = `<i class="fas fa-chart-line"></i> ${gpaNum >= 3.0 ? 'Good' : 'Needs Work'}`;
            trendElement.className = `stat-trend ${gpaNum >= 3.0 ? 'positive' : 'negative'}`;
        }
        
        // Update grade distribution
        this.updateGradeDistribution();
        
        toastr.success(`GPA Calculated: ${gpa}`);
        return gpaNum;
    }

    updateStats() {
        const totalCredits = this.courses.reduce((sum, course) => sum + course.credits, 0);
        const totalCourses = this.courses.length;
        
        const creditsElement = document.getElementById('totalCredits');
        const coursesElement = document.getElementById('totalCourses');
        const courseCountBadge = document.getElementById('courseCountBadge');
        
        if (creditsElement) creditsElement.textContent = totalCredits;
        if (coursesElement) coursesElement.textContent = totalCourses;
        if (courseCountBadge) courseCountBadge.textContent = `${totalCourses} ${totalCourses === 1 ? 'Course' : 'Courses'}`;
        
        this.calculateGPA();
        this.calculateRequiredForTarget();
    }

    updateGradeDistribution() {
        const gradeCounts = {
            'A+': 0, 'A': 0, 'A-': 0,
            'B+': 0, 'B': 0, 'B-': 0,
            'C+': 0, 'C': 0, 'C-': 0,
            'F': 0
        };
        
        this.courses.forEach(course => {
            if (gradeCounts.hasOwnProperty(course.grade)) {
                gradeCounts[course.grade]++;
            }
        });
        
        const total = this.courses.length;
        
        // Update bars
        Object.keys(gradeCounts).forEach(grade => {
            const bar = document.querySelector(`.grade-bar[data-grade="${grade}"]`);
            if (bar) {
                const percentage = total > 0 ? (gradeCounts[grade] / total * 100) : 0;
                bar.style.width = `${percentage}%`;
            }
        });
    }

    calculateRequiredForTarget() {
        const targetGpaElement = document.getElementById('targetGpa');
        const currentGpaElement = document.getElementById('currentGpa');
        const totalCreditsElement = document.getElementById('totalCredits');
        const requiredMarksElement = document.getElementById('requiredMarks');
        
        if (!targetGpaElement || !currentGpaElement || !totalCreditsElement || !requiredMarksElement) return;
        
        const targetGpa = parseFloat(targetGpaElement.textContent);
        const currentGpa = parseFloat(currentGpaElement.textContent) || 0;
        const totalCredits = parseInt(totalCreditsElement.textContent);
        const remainingCredits = Math.max(0, 120 - totalCredits); // Assuming 120 credits for degree
        
        if (totalCredits === 0 || isNaN(targetGpa)) {
            requiredMarksElement.textContent = '--';
            return;
        }
        
        if (remainingCredits === 0) {
            requiredMarksElement.textContent = 'Degree Complete';
            return;
        }
        
        const currentQuality = currentGpa * totalCredits;
        const targetQuality = targetGpa * (totalCredits + remainingCredits);
        const requiredQuality = targetQuality - currentQuality;
        
        if (requiredQuality <= 0) {
            requiredMarksElement.textContent = 'Target Achieved';
            return;
        }
        
        const requiredGpa = requiredQuality / remainingCredits;
        const requiredAvgMarks = this.gpaToMarks(requiredGpa);
        
        requiredMarksElement.textContent = 
            `Avg ${requiredAvgMarks}% in remaining ${remainingCredits} credits`;
    }

    gpaToMarks(gpa) {
        if (gpa >= 4.0) return 90;
        if (gpa >= 3.75) return 85;
        if (gpa >= 3.50) return 80;
        if (gpa >= 3.25) return 75;
        if (gpa >= 3.00) return 70;
        if (gpa >= 2.75) return 66;
        if (gpa >= 2.50) return 63;
        if (gpa >= 2.00) return 60;
        if (gpa >= 1.50) return 55;
        return 0;
    }

    sortCourses() {
        this.courses.sort((a, b) => a.code.localeCompare(b.code));
        this.updateCoursesTable();
        toastr.info('Courses sorted by code');
    }

    filterCourses() {
        const currentSemester = document.getElementById('semesterSelect').value;
        if (!currentSemester) {
            toastr.warning('Select a semester first');
            return;
        }
        
        const filtered = this.courses.filter(c => c.semester === currentSemester);
        
        if (filtered.length === 0) {
            toastr.info(`No courses found for Semester ${currentSemester}`);
            return;
        }
        
        const tbody = document.getElementById('coursesBody');
        tbody.innerHTML = '';
        
        filtered.forEach(course => this.addCourseToTable(course));
        
        toastr.success(`Showing ${filtered.length} courses for Semester ${currentSemester}`);
    }

    exportReport() {
        if (this.courses.length === 0) {
            toastr.warning('No data to export');
            return;
        }
        
        const data = {
            program: document.getElementById('programSelect').value,
            semester: document.getElementById('semesterSelect').value,
            session: document.getElementById('sessionSelect').value,
            gpa: document.getElementById('currentGpa').textContent,
            courses: this.courses,
            generatedAt: new Date().toLocaleString()
        };
        
        // Create downloadable JSON
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `GradeX-Report-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toastr.success('Report exported successfully');
    }

    saveData() {
        const data = {
            courses: this.courses,
            nextId: this.nextId,
            program: this.currentProgram,
            semester: this.currentSemester,
            theme: this.isDarkMode ? 'dark' : 'light',
            savedAt: new Date().toISOString()
        };
        
        localStorage.setItem('gradex_data', JSON.stringify(data));
        toastr.success('Data saved to browser storage');
    }

    loadCourses() {
        const saved = localStorage.getItem('gradex_data');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.courses = data.courses || [];
                this.nextId = data.nextId || 1;
                this.currentProgram = data.program || '';
                this.currentSemester = data.semester || '';
                this.isDarkMode = data.theme === 'dark';
                
                // Restore program and semester selection
                if (data.program) {
                    document.getElementById('programSelect').value = data.program;
                }
                if (data.semester) {
                    document.getElementById('semesterSelect').value = data.semester;
                }
                
                this.updateCoursesTable();
                this.showCurriculumCourses();
                toastr.info('Loaded saved data from browser storage');
            } catch (e) {
                console.error('Error loading saved data:', e);
                localStorage.removeItem('gradex_data');
            }
        }
    }

    saveCourses() {
        const data = {
            courses: this.courses,
            nextId: this.nextId,
            program: this.currentProgram,
            semester: this.currentSemester,
            theme: this.isDarkMode ? 'dark' : 'light',
            savedAt: new Date().toISOString()
        };
        
        localStorage.setItem('gradex_data', JSON.stringify(data));
    }

    resetAll() {
        if (!confirm('Are you sure you want to reset all data? This cannot be undone.')) {
            return;
        }
        
        this.courses = [];
        this.nextId = 1;
        this.currentProgram = '';
        this.currentSemester = '';
        
        // Reset form
        document.getElementById('courseForm').reset();
        document.getElementById('programSelect').value = '';
        document.getElementById('semesterSelect').value = '';
        document.getElementById('creditHours').value = 3;
        document.getElementById('marks').value = 85;
        
        // Clear storage
        localStorage.removeItem('gradex_data');
        
        // Update UI
        this.updateCoursesTable();
        this.updateStats();
        this.updateGradePreview();
        this.showCurriculumCourses();
        
        toastr.success('All data has been reset');
    }
}

// Initialize GradeX when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.gradeX = new GradeX();
    
    // Add mobile touch support
    addTouchSupport();
});

function addTouchSupport() {
    // Touch active state for buttons
    document.querySelectorAll('.btn, .action-btn, .btn-icon').forEach(button => {
        button.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        button.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
    
    // Prevent zoom on input focus for iOS
    document.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                document.body.style.zoom = "100%";
            }
        });
    });
    
    // Add touch styles
    const touchStyles = document.createElement('style');
    touchStyles.textContent = `
        .touch-active {
            opacity: 0.8;
            transform: scale(0.98) !important;
        }
        
        @media (hover: none) and (pointer: coarse) {
            .btn:hover, .action-btn:hover, .btn-icon:hover,
            .stat-card:hover, .card:hover, .footer-links a:hover,
            .curriculum-item:hover, .grade-scale-row:hover {
                transform: none !important;
            }
        }
        
        @media (max-width: 768px) {
            .btn, input[type="text"], select, button {
                min-height: 44px !important;
            }
        }
    `;
    document.head.appendChild(touchStyles);
}