"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        // Appending the user's key directly to the client side submission
        formData.append("access_key", "395206a8-37a7-45f7-935b-696238bd6e78");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
            } else {
                setError(result.message || "Failed to send message. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.backgroundGrid} />

            <header className={styles.header}>
                <Link href="/map" className={styles.backBtn}>
                    <ArrowLeft size={20} />
                    <span>Back to Map</span>
                </Link>
                <div className={styles.logo}>
                    <img src="/nodus_logo_white.png" alt="Nodus" className={styles.logoImg} />
                </div>
            </header>

            <main className={styles.mainContent}>
                <section className={styles.contactSection}>
                    <h1 className={styles.title}>Feedbacks & Suggestions</h1>
                    <p className={styles.subtitle}>We're constantly evolving. Help us map the future better.</p>

                    <div className={styles.specialNotice}>
                        <p><strong>Note:</strong> If you need to add your company in here, please message us. We will contact you as soon as possible.</p>
                    </div>

                    {!submitted ? (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label>Name (Optional)</label>
                                <input type="text" name="name" placeholder="Your name" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Email (Optional)</label>
                                <input type="email" name="email" placeholder="email@example.com" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Message</label>
                                <textarea required name="message" placeholder="Your feedback or suggestion here..." rows={5}></textarea>
                            </div>

                            {error && <p className={styles.errorMsg}>{error}</p>}

                            <button type="submit" className={styles.submitBtn} disabled={loading}>
                                <span>{loading ? "Sending..." : "Send Message"}</span>
                                {!loading && <Send size={18} />}
                            </button>
                        </form>
                    ) : (
                        <div className={styles.successMsg}>
                            <CheckCircle size={48} className={styles.successIcon} />
                            <h2>Thank you!</h2>
                            <p>Your feedback has been received. We'll get back to you soon.</p>
                            <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>Send another message</button>
                        </div>
                    )}
                </section>

                <aside className={styles.updatesSection}>
                    <h2 className={styles.updatesTitle}>Upcoming Updates</h2>
                    <ul className={styles.updatesList}>
                        <li>
                            <div className={styles.updateDot} />
                            <span>Fix current logo bugs</span>
                        </li>
                        <li>
                            <div className={styles.updateDot} />
                            <span>Add more companies</span>
                        </li>
                        <li>
                            <div className={styles.updateDot} />
                            <span>Add career updates</span>
                        </li>
                        <li>
                            <div className={styles.updateDot} />
                            <span>Send us a message for any custom suggestions!</span>
                        </li>
                    </ul>
                </aside>
            </main>

            <footer className={styles.footer}>
                <p>© 2024 NODUS SPATIAL SYSTEMS. ALL COORDINATES RESERVED.</p>
            </footer>
        </div>
    );
}
