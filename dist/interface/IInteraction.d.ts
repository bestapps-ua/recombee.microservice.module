interface IInteractionOptions {
    /** UTC timestamp of the view as ISO8601-1 pattern or UTC epoch time. The default value is the current time. */
    timestamp?: string | number;
    /** Sets whether the given user/item should be created if not present in the database. */
    cascadeCreate?: boolean;
    /** If this detail view is based on a recommendation request, `recommId` is the id of the clicked recommendation. */
    recommId?: string;
}
interface IInteractionViewOptions extends IInteractionOptions {
    /** Duration of the view */
    duration?: number;
    /** A dictionary of additional data for the interaction. */
    additionalData?: {
        [key: string]: unknown;
    };
}
interface IInteractionDetailView {
    userId: string;
    itemId: string;
    options?: IInteractionViewOptions;
}
interface IInteractionRating {
    userId: string;
    itemId: string;
    rating: number;
    options?: IInteractionOptions;
}
interface IInteractionBookmark {
    userId: string;
    itemId: string;
    options?: IInteractionOptions;
}
export { IInteractionOptions, IInteractionViewOptions, IInteractionDetailView, IInteractionRating, IInteractionBookmark, };
//# sourceMappingURL=IInteraction.d.ts.map