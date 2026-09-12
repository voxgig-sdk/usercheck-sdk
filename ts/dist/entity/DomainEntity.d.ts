import { UsercheckEntityBase } from '../UsercheckEntityBase';
import type { UsercheckSDK } from '../UsercheckSDK';
import type { Control } from '../types';
import type { Domain, DomainLoadMatch } from '../UsercheckTypes';
declare class DomainEntity extends UsercheckEntityBase<Domain> {
    constructor(client: UsercheckSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    load(this: any, reqmatch?: DomainLoadMatch, ctrl?: Control): Promise<DomainEntity>;
}
export { DomainEntity };
