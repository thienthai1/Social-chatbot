interface ISocialType {
	id: number
	name: string
	imgSrc: string
}

interface ISocialTypeList extends Array<ISocialType> {}

export type { ISocialType, ISocialTypeList }
