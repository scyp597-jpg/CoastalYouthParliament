import { PrismaService } from '../prisma.service';
export declare class PositionsService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    findAll(electionId: string): Promise<({
        _count: {
            applications: number;
        };
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
    findOpen(electionId?: string): Promise<({
        _count: {
            applications: number;
        };
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
    findOne(id: string): Promise<({
        applications: ({
            user: {
                id: string;
                email: string;
                name: string;
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
        _count: {
            applications: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        electionId: string;
        isOpen: boolean;
        maxApplicants: number;
    }) | null>;
    updateStatus(id: string, isOpen: boolean): Promise<{
        _count: {
            applications: number;
        };
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
    getPositionStats(electionId: string): Promise<({
        _count: {
            applications: number;
        };
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
}
