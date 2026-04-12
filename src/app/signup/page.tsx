"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";
import styles from "./Signup.module.css";
import {
    ChevronRight, ChevronLeft, Check, Lock, Mail, User,
    MapPin, Globe, Briefcase, GraduationCap, Lightbulb,
    Code, Palette, Users, Rocket, Search, Terminal,
    Building, Globe2, Link as LinkIcon
} from "lucide-react";

// Mock location data for India
const INDIA_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

const ROLES = [
    { id: "student", label: "Student", icon: GraduationCap },
    { id: "fresher", label: "Fresher", icon: Briefcase },
    { id: "founder", label: "Founder", icon: Rocket },
    { id: "freelancer", label: "Freelancer", icon: Palette },
    { id: "developer", label: "Developer", icon: Code },
    { id: "designer", label: "Designer", icon: Palette },
    { id: "recruiter", label: "Recruiter", icon: Users },
    { id: "job_seeker", label: "Job Seeker", icon: Search },
    { id: "startup_employee", label: "Startup Employee", icon: Building },
];

const PURPOSES = [
    "Discover Startups", "Find Jobs", "Find Internships", "Build Connections",
    "Startup News", "Founder Networking", "Freelancer Opportunities",
    "Events and Meetups", "Tech Communities", "Co-founder Matching",
    "Remote Jobs", "Hire Talent"
];

export default function SignupPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        country: "India",
        state: "",
        city: "",
        password: "",
        confirmPassword: "",
        selectedRoles: [] as string[],
        purposes: [] as string[],
        // Conditional Fields
        founderInfo: { companyName: "", website: "", linkedin: "", industry: "", teamSize: "", lookingFor: [] as string[] },
        studentInfo: { interestedRole: "", preferredCity: "", skills: "", lookingFor: [] as string[] },
        freelancerInfo: { skills: "", portfolio: "", linkedin: "", preferredClient: "" }
    });

    // Search/Filter states
    const [stateSearch, setStateSearch] = useState("");
    const [showStateDropdown, setShowStateDropdown] = useState(false);

    const filteredStates = useMemo(() =>
        INDIA_STATES.filter(s => s.toLowerCase().includes(stateSearch.toLowerCase())),
        [stateSearch]
    );

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const toggleRole = (roleId: string) => {
        setFormData(prev => ({
            ...prev,
            selectedRoles: prev.selectedRoles.includes(roleId)
                ? prev.selectedRoles.filter(r => r !== roleId)
                : [...prev.selectedRoles, roleId]
        }));
    };

    const togglePurpose = (purpose: string) => {
        setFormData(prev => ({
            ...prev,
            purposes: prev.purposes.includes(purpose)
                ? prev.purposes.filter(p => p !== purpose)
                : [...prev.purposes, purpose]
        }));
    };

    const handleSignup = async () => {
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setLoading(true);
        setError("");

        try {
            const { data, error: signupError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: { data: { full_name: formData.fullName } }
            });

            if (signupError) throw signupError;

            if (data.user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert([{
                        id: data.user.id,
                        full_name: formData.fullName,
                        email: formData.email,
                        location: `${formData.city}, ${formData.state}, ${formData.country}`,
                        role: formData.selectedRoles.join(", "),
                        role_details: {
                            purposes: formData.purposes,
                            founderInfo: formData.selectedRoles.includes('founder') ? formData.founderInfo : null,
                            studentInfo: (formData.selectedRoles.includes('student') || formData.selectedRoles.includes('fresher')) ? formData.studentInfo : null,
                            freelancerInfo: formData.selectedRoles.includes('freelancer') ? formData.freelancerInfo : null,
                        }
                    }]);

                if (profileError) throw profileError;

                if (!data.session) {
                    setSuccess("Account created! Please check your email and confirm to login.");
                } else {
                    router.push("/map");
                }
            }
        } catch (err: any) {
            setError(err.message || "An error occurred during signup");
        } finally {
            setLoading(false);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1: // Basic Info
                return (
                    <div className={styles.stepContainer}>
                        <h2 className={styles.stepTitle}>Create your Nodus account</h2>
                        <p className={styles.stepDesc}>Explore the Indian startup ecosystem join our community.</p>

                        <div className={styles.inputGroup}>
                            <label><User size={16} /> Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Mail size={16} /> Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Globe size={16} /> Country</label>
                            <input type="text" value="India" readOnly />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><MapPin size={16} /> State</label>
                            <div className={styles.searchableDropdown}>
                                <input
                                    type="text"
                                    placeholder="Select or type state"
                                    value={stateSearch || formData.state}
                                    onChange={(e) => {
                                        setStateSearch(e.target.value);
                                        setShowStateDropdown(true);
                                    }}
                                    onFocus={() => setShowStateDropdown(true)}
                                />
                                {showStateDropdown && filteredStates.length > 0 && (
                                    <div className={styles.dropdownList}>
                                        {filteredStates.map(s => (
                                            <div
                                                key={s}
                                                className={styles.dropdownItem}
                                                onClick={() => {
                                                    setFormData({ ...formData, state: s });
                                                    setStateSearch(s);
                                                    setShowStateDropdown(false);
                                                }}
                                            >
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Terminal size={16} /> City</label>
                            <input
                                type="text"
                                placeholder="e.g. Bangalore"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>

                        <button
                            className={styles.nextBtn}
                            onClick={nextStep}
                            disabled={!formData.fullName || !formData.email || !formData.state || !formData.city}
                        >
                            Next <ChevronRight size={18} />
                        </button>
                    </div>
                );

            case 2: // Account Security
                return (
                    <div className={styles.stepContainer}>
                        <h2 className={styles.stepTitle}>Set your password</h2>
                        <p className={styles.stepDesc}>Secure your account with a strong password.</p>

                        <div className={styles.verifyEmail}>
                            <Mail size={16} /> <span>{formData.email}</span>
                            <Check size={16} className={styles.checkIcon} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Lock size={16} /> Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Check size={16} /> Confirm Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>

                        <div className={styles.btnRow}>
                            <button className={styles.backBtn} onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                            <button
                                className={styles.nextBtn}
                                onClick={nextStep}
                                disabled={!formData.password || formData.password !== formData.confirmPassword}
                            >
                                Next <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                );

            case 3: // Role Selection
                return (
                    <div className={styles.stepContainer}>
                        <h2 className={styles.stepTitle}>Which best describes you?</h2>
                        <p className={styles.stepDesc}>Select one or more roles that fit you.</p>

                        <div className={styles.roleGrid}>
                            {ROLES.map(role => (
                                <div
                                    key={role.id}
                                    className={`${styles.roleCard} ${formData.selectedRoles.includes(role.id) ? styles.activeRole : ""}`}
                                    onClick={() => toggleRole(role.id)}
                                >
                                    <role.icon size={24} />
                                    <span>{role.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.btnRow}>
                            <button className={styles.backBtn} onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                            <button
                                className={styles.nextBtn}
                                onClick={nextStep}
                                disabled={formData.selectedRoles.length === 0}
                            >
                                Next <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                );

            case 4: // Purpose Selection
                return (
                    <div className={styles.stepContainer}>
                        <h2 className={styles.stepTitle}>What do you want to use Nodus for?</h2>
                        <p className={styles.stepDesc}>Help us personalize your experience.</p>

                        <div className={styles.chipGrid}>
                            {PURPOSES.map(p => (
                                <div
                                    key={p}
                                    className={`${styles.chip} ${formData.purposes.includes(p) ? styles.activeChip : ""}`}
                                    onClick={() => togglePurpose(p)}
                                >
                                    {p}
                                </div>
                            ))}
                        </div>

                        <div className={styles.btnRow}>
                            <button className={styles.backBtn} onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                            <button
                                className={styles.nextBtn}
                                onClick={() => {
                                    // Decide whether to show profile completion or finish
                                    const needsCompletion = formData.selectedRoles.some(r => ['founder', 'student', 'fresher', 'freelancer'].includes(r));
                                    if (needsCompletion) nextStep();
                                    else handleSignup();
                                }}
                                disabled={formData.purposes.length === 0}
                            >
                                {formData.selectedRoles.some(r => ['founder', 'student', 'fresher', 'freelancer'].includes(r)) ? "Next" : "Finish"} <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                );

            case 5: // Conditional Profile Completion
                if (formData.selectedRoles.includes('founder')) {
                    return (
                        <div className={styles.stepContainer}>
                            <h2 className={styles.stepTitle}>About your startup</h2>
                            <p className={styles.stepDesc}>Completing this helps founders network better.</p>

                            <div className={styles.inputGroup}>
                                <label><Building size={16} /> Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Acme Inc"
                                    value={formData.founderInfo.companyName}
                                    onChange={(e) => setFormData({ ...formData, founderInfo: { ...formData.founderInfo, companyName: e.target.value } })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label><Globe2 size={16} /> Website URL</label>
                                <input
                                    type="text"
                                    placeholder="https://acme.com"
                                    value={formData.founderInfo.website}
                                    onChange={(e) => setFormData({ ...formData, founderInfo: { ...formData.founderInfo, website: e.target.value } })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label><LinkIcon size={16} /> LinkedIn Profile</label>
                                <input
                                    type="text"
                                    placeholder="https://linkedin.com/in/..."
                                    value={formData.founderInfo.linkedin}
                                    onChange={(e) => setFormData({ ...formData, founderInfo: { ...formData.founderInfo, linkedin: e.target.value } })}
                                />
                            </div>

                            <div className={styles.btnRow}>
                                <button className={styles.backBtn} onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                                <button className={styles.signupBtn} onClick={handleSignup} disabled={loading}>
                                    {loading ? "Creating Account..." : "Create Account"}
                                </button>
                            </div>
                        </div>
                    );
                }

                if (formData.selectedRoles.includes('student') || formData.selectedRoles.includes('fresher')) {
                    return (
                        <div className={styles.stepContainer}>
                            <h2 className={styles.stepTitle}>Your Carrer path</h2>
                            <p className={styles.stepDesc}>Tell us about your area of interest.</p>

                            <div className={styles.inputGroup}>
                                <label><Briefcase size={16} /> Interested Role</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Frontend Developer"
                                    value={formData.studentInfo.interestedRole}
                                    onChange={(e) => setFormData({ ...formData, studentInfo: { ...formData.studentInfo, interestedRole: e.target.value } })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label><MapPin size={16} /> Preferred City</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Bangalore"
                                    value={formData.studentInfo.preferredCity}
                                    onChange={(e) => setFormData({ ...formData, studentInfo: { ...formData.studentInfo, preferredCity: e.target.value } })}
                                />
                            </div>

                            <div className={styles.btnRow}>
                                <button className={styles.backBtn} onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                                <button className={styles.signupBtn} onClick={handleSignup} disabled={loading}>
                                    {loading ? "Creating Account..." : "Create Account"}
                                </button>
                            </div>
                        </div>
                    );
                }

                if (formData.selectedRoles.includes('freelancer')) {
                    return (
                        <div className={styles.stepContainer}>
                            <h2 className={styles.stepTitle}>Freelancer Profile</h2>
                            <p className={styles.stepDesc}>Showcase your skills to potential clients.</p>

                            <div className={styles.inputGroup}>
                                <label><Terminal size={16} /> Skills</label>
                                <input
                                    type="text"
                                    placeholder="e.g. React, Node, UI Design"
                                    value={formData.freelancerInfo.skills}
                                    onChange={(e) => setFormData({ ...formData, freelancerInfo: { ...formData.freelancerInfo, skills: e.target.value } })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label><LinkIcon size={16} /> Portfolio Link</label>
                                <input
                                    type="text"
                                    placeholder="https://behance.net/..."
                                    value={formData.freelancerInfo.portfolio}
                                    onChange={(e) => setFormData({ ...formData, freelancerInfo: { ...formData.freelancerInfo, portfolio: e.target.value } })}
                                />
                            </div>

                            <div className={styles.btnRow}>
                                <button className={styles.backBtn} onClick={prevStep}><ChevronLeft size={18} /> Back</button>
                                <button className={styles.signupBtn} onClick={handleSignup} disabled={loading}>
                                    {loading ? "Creating Account..." : "Create Account"}
                                </button>
                            </div>
                        </div>
                    );
                }

                // Default fallback
                handleSignup();
                return null;

            default:
                return null;
        }
    };

    return (
        <div className={styles.signupPage}>
            <div className={styles.signupCard}>
                <div className={styles.progressHeader}>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${(step / 5) * 100}%` }}></div>
                    </div>
                    <span className={styles.stepCount}>Step {step} of 5</span>
                </div>

                {error && <div className={styles.errorMsg}>{error}</div>}
                {success && <div className={styles.successMsg}>{success}</div>}

                {renderStep()}
            </div>
        </div>
    );
}
