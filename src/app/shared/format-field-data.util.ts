import { Onwership } from "../data-access/irrigation.model";

export function getFieldOwnership(fieldId: string, onwerships: Onwership[]): string {
    const ownership = onwerships.find(ownership => ownership.field_id === fieldId);
    return ownership?.owned_by || '';
}
