"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { User, Mail, MapPin, Briefcase, ChevronLeft } from "lucide-react";
import Link from "next/link";
import styles from "./profile.module.css";
import { useRouter } from "next/navigation";

interface Profile {
    full_name: string;
    email: string;
    role: string;
    location?: string;
}

export default function ProfilePage() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchProfile() {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push("/signup");
                return;
            }

            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (data) {
                setProfile(data);
            }
            setLoading(false);
        }
        fetchProfile();
    }, [router]);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>Loading profile...</div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/map" className={styles.backBtn}>
                    <ChevronLeft size={20} />
                    Back to Map
                </Link>
                <h1>My Profile</h1>
            </div>

            <div className={styles.profileCard}>
                <div className={styles.avatarSection}>
                    <div className={styles.avatar}>
                        {profile?.full_name?.charAt(0) || "U"}
                    </div>
                    <div className={styles.nameSection}>
                        <h2>{profile?.full_name || "Anonymous User"}</h2>
                        <span className={styles.badge}>{profile?.role || "Member"}</span>
                    </div>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <Mail size={18} />
                        </div>
                        <div className={styles.infoContent}>
                            <label>Email Address</label>
                            <span>{profile?.email || "Not provided"}</span>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <Briefcase size={18} />
                        </div>
                        <div className={styles.infoContent}>
                            <label>Professional Role</label>
                            <span>{profile?.role || "Not provided"}</span>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <MapPin size={18} />
                        </div>
                        <div className={styles.infoContent}>
                            <label>Location</label>
                            <span>{profile?.location || "India"}</span>
                        </div>
                    </div>
                </div>

                <button className={styles.editBtn}>Edit Profile</button>
            </div>
        </div>
    );
}
