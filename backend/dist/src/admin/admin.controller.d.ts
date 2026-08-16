import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getNews(): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
            slug: string;
            title: string;
            summary: string;
            content: string;
            category: string;
            published: boolean;
            publishedAt: Date | null;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    createNews(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        slug: string;
        title: string;
        summary: string;
        content: string;
        category: string;
        published: boolean;
        publishedAt: Date | null;
    }>;
    updateNews(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        slug: string;
        title: string;
        summary: string;
        content: string;
        category: string;
        published: boolean;
        publishedAt: Date | null;
    }>;
    deleteNews(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        slug: string;
        title: string;
        summary: string;
        content: string;
        category: string;
        published: boolean;
        publishedAt: Date | null;
    }>;
    getEvents(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        status: string;
        title: string;
        description: string;
        location: string;
        date: Date;
    }[]>;
    createEvent(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        status: string;
        title: string;
        description: string;
        location: string;
        date: Date;
    }>;
    updateEvent(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        status: string;
        title: string;
        description: string;
        location: string;
        date: Date;
    }>;
    deleteEvent(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        status: string;
        title: string;
        description: string;
        location: string;
        date: Date;
    }>;
    getResources(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        description: string | null;
        fileUrl: string;
        downloadsCount: number;
    }[]>;
    createResource(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        description: string | null;
        fileUrl: string;
        downloadsCount: number;
    }>;
    updateResource(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        description: string | null;
        fileUrl: string;
        downloadsCount: number;
    }>;
    deleteResource(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        description: string | null;
        fileUrl: string;
        downloadsCount: number;
    }>;
    createPosition(electionId: string, data: {
        title: string;
        description?: string;
        maxApplicants?: number;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        electionId: string;
        isOpen: boolean;
        maxApplicants: number;
    }>;
    getPositions(electionId: string): Promise<({
        applications: {
            comments: string | null;
            id: string;
            email: string;
            name: string;
            updatedAt: Date;
            county: string;
            status: string;
            description: string;
            electionId: string;
            userId: string;
            positionId: string;
            constituency: string | null;
            age: number | null;
            reasonForApplying: string | null;
            changeChampion: string | null;
            appliedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        electionId: string;
        isOpen: boolean;
        maxApplicants: number;
    })[]>;
    openPosition(positionId: string, body: {
        electionId: string;
    }): Promise<{
        applications: {
            comments: string | null;
            id: string;
            email: string;
            name: string;
            updatedAt: Date;
            county: string;
            status: string;
            description: string;
            electionId: string;
            userId: string;
            positionId: string;
            constituency: string | null;
            age: number | null;
            reasonForApplying: string | null;
            changeChampion: string | null;
            appliedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        electionId: string;
        isOpen: boolean;
        maxApplicants: number;
    }>;
    closePosition(positionId: string, body: {
        electionId: string;
    }): Promise<{
        applications: {
            comments: string | null;
            id: string;
            email: string;
            name: string;
            updatedAt: Date;
            county: string;
            status: string;
            description: string;
            electionId: string;
            userId: string;
            positionId: string;
            constituency: string | null;
            age: number | null;
            reasonForApplying: string | null;
            changeChampion: string | null;
            appliedAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        electionId: string;
        isOpen: boolean;
        maxApplicants: number;
    }>;
    getApplicationsByPosition(positionId: string): Promise<({
        user: {
            id: string;
            email: string;
            name: string;
        };
        election: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            title: string;
            description: string | null;
            startsAt: Date;
            endsAt: Date;
            createdBy: string;
        };
        position: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            electionId: string;
            isOpen: boolean;
            maxApplicants: number;
        };
    } & {
        comments: string | null;
        id: string;
        email: string;
        name: string;
        updatedAt: Date;
        county: string;
        status: string;
        description: string;
        electionId: string;
        userId: string;
        positionId: string;
        constituency: string | null;
        age: number | null;
        reasonForApplying: string | null;
        changeChampion: string | null;
        appliedAt: Date;
    })[]>;
    getApplicationStats(electionId: string): Promise<{
        totalApplications: number;
        byPosition: Record<string, {
            title: string;
            count: number;
            statuses: Record<string, number>;
        }>;
        byStatus: {
            pending: number;
            approved: number;
            rejected: number;
            withdrawn: number;
        };
        byCounty: Record<string, number>;
    }>;
    getUserActivity(limit?: string, page?: string): Promise<{
        data: {
            id: string;
            email: string;
            name: string;
            createdAt: Date;
            userId: string;
            action: string;
            details: string | null;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getUserActivityStats(): Promise<{
        totalActivities: number;
        activeUsers: number;
        byAction: Record<string, number>;
        recentActivities: {
            id: string;
            email: string;
            name: string;
            createdAt: Date;
            userId: string;
            action: string;
            details: string | null;
        }[];
    }>;
    getAllApplications(query: {
        electionId?: string;
        positionId?: string;
        status?: string;
        county?: string;
        page?: string;
        limit?: string;
    }): Promise<{
        data: ({
            user: {
                id: string;
                email: string;
                name: string;
            };
            election: {
                id: string;
                title: string;
            };
            position: {
                id: string;
                title: string;
            };
        } & {
            comments: string | null;
            id: string;
            email: string;
            name: string;
            updatedAt: Date;
            county: string;
            status: string;
            description: string;
            electionId: string;
            userId: string;
            positionId: string;
            constituency: string | null;
            age: number | null;
            reasonForApplying: string | null;
            changeChampion: string | null;
            appliedAt: Date;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    updateApplicationStatus(applicationId: string, body: {
        status: string;
    }): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
        };
        election: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            title: string;
            description: string | null;
            startsAt: Date;
            endsAt: Date;
            createdBy: string;
        };
        position: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            electionId: string;
            isOpen: boolean;
            maxApplicants: number;
        };
    } & {
        comments: string | null;
        id: string;
        email: string;
        name: string;
        updatedAt: Date;
        county: string;
        status: string;
        description: string;
        electionId: string;
        userId: string;
        positionId: string;
        constituency: string | null;
        age: number | null;
        reasonForApplying: string | null;
        changeChampion: string | null;
        appliedAt: Date;
    }>;
}
